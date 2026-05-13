import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate data
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log submission (in production, save to database)
    console.log('Contact form submission:', {
      ...body,
      timestamp: new Date().toISOString(),
    });

    // Return success
    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received. We will contact you soon.',
        submissionId: `SUB-${Date.now()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'An error occurred' },
      { status: 500 }
    );
  }
}