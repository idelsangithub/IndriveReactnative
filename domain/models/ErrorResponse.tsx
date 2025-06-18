interface ErrorResponse {
    message:    string | string[];
    error?:      string;
    statusCode: number;
}

const defaultErrorResponse: ErrorResponse = {
    statusCode: 500,
    error: 'Error desconocido',
    message: 'Ha ocurrido un error desconocido, intenta nuevamente'
}

export { ErrorResponse, defaultErrorResponse};


