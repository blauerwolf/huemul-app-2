import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

  return NextResponse.json({
    success: true,
    message: {
        version: '0.1.0',
        codename: 'Huemul',
    },
  })
}