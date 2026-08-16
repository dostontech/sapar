import { NextResponse } from 'next/server';

// In-memory ring buffer to store recent visitor consent and location telemetry
const visitorTelemetryStore = globalThis.__saparVisitorStore || [];
globalThis.__saparVisitorStore = visitorTelemetryStore;

export async function POST(request) {
    try {
        const body = await request.json().catch(() => ({}));

        const headers = request.headers;
        const forwardedFor = headers.get('x-forwarded-for') || '';
        const ip = forwardedFor.split(',')[0].trim() || headers.get('x-real-ip') || '127.0.0.1';

        // Vercel Edge / Google Cloud geolocation headers
        const country = headers.get('x-vercel-ip-country') || headers.get('cf-ipcountry') || 'UZ';
        const region = headers.get('x-vercel-ip-country-region') || 'TAS';
        const city = headers.get('x-vercel-ip-city') ? decodeURIComponent(headers.get('x-vercel-ip-city')) : 'Tashkent';
        const latitude = headers.get('x-vercel-ip-latitude') || '';
        const longitude = headers.get('x-vercel-ip-longitude') || '';
        const userAgent = headers.get('user-agent') || 'Unknown';

        const visitorRecord = {
            id: 'v_' + Math.random().toString(36).substr(2, 9),
            timestamp: body.timestamp || new Date().toISOString(),
            ip: ip,
            country: country,
            region: region,
            city: city,
            geo: latitude && longitude ? `${latitude}, ${longitude}` : null,
            language: body.language || 'oz',
            consent: body.consent || 'accepted',
            path: body.path || '/',
            userAgent: userAgent,
        };

        // Keep last 200 records in memory
        visitorTelemetryStore.unshift(visitorRecord);
        if (visitorTelemetryStore.length > 200) {
            visitorTelemetryStore.pop();
        }

        return NextResponse.json({
            success: true,
            status: 'recorded',
            record: {
                city,
                country,
                consent: visitorRecord.consent,
            },
        });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get('format');

    // Return detailed visitor telemetry list
    const summary = {
        totalRecorded: visitorTelemetryStore.length,
        lastUpdated: new Date().toISOString(),
        visitors: visitorTelemetryStore,
    };

    if (format === 'raw') {
        return NextResponse.json(summary);
    }

    // Return friendly JSON response for the owner to check
    return NextResponse.json({
        platform: 'SAPAR Telemetry & Consent Monitor',
        status: 'Active',
        totalEvents: visitorTelemetryStore.length,
        recentVisitors: visitorTelemetryStore.slice(0, 50),
    });
}
