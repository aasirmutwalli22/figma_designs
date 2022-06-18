export default {
    //success 2xx
    ok: 200,
    created: 201,  //on post //
    accepted: 202, //request is accepted but not implemented
    partialInfo: 203, //on get//
    noResponse: 204, //server recieved request but no info to send back

    //error 4xx, 5xx
    badRequest: 400,   //request has bad syntax or was inherently impossible to be satisfied
    unAuthorised: 401, //error in authorization
    paymentRequired: 402, //client retry with suitable chargeto header
    forbidden: 403, //request is for something forbidden, authorization will not help
    notFound: 404, //server has not found anything matching url
    internalError: 500, //server has encountered an unexpected condition which prevented it from fulfilling request
    notImplemented: 501, //server doesnot support facility specified
    serviceTemperoryOverloaded: 503, //similar to 500 //response from other service dit not return with in time

    //redirection 3xx listing incomplete
    moved: 301
    //
}

// export default StatusCode