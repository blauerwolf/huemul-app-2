import { NextResponse } from 'next/server';

export const apiErrors = {
    notFound: () => {
        return NextResponse.json({
            success: false,
            message: 'Recurso no encontrado',
        }, { status: 404 });
    },
    unauthorized: () => {
        return NextResponse.json({
            success: false,
            message: 'No autorizado',
        }, { status: 401 });
    },
    badRequest: ( message = 'Solicitud Incorecta') => {
        return  NextResponse.json({
            success: false,
            message: message,            
        }, { status: 400 });
    },
    serverError: ( message = 'Error interno del servidor.' ) => {
        return NextResponse.json({
            success: false,
            message: message,
        }, { status: 500 });
    },
    forbidden: () => {
        return NextResponse.json({
            success: false,
            message: 'Acceso no permitido',
        }, { status: 403 });
    },
    custom: (message: string, status = 400) => {
        return NextResponse.json({
            success: false,
            message: message,
        }, { status: status } );
    }
}