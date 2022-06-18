export default {
    //success 2xx
    ok: 'ok',
    created: 'created',  //on post //
    accepted: 'accepted', //request is accepted but not implemented
    partialInfo: 'partial info', //on get//
    noResponse: 'no response', //server recieved request but no info to send back

    //error 4xx, 5xx
    badRequest: 'bad request',   //request has bad syntax or was inherently impossible to be satisfied
    unAuthorised: 'un authorised', //error in authorization
    paymentRequired: 'payment required', //client retry with suitable chargeto header
    forbidden: 'forbidden', //request is for something forbidden, authorization will not help
    notFound: 'not found', //server has not found anything matching url
    internalError: 'internal error', //server has encountered an unexpected condition which prevented it from fulfilling request
    notImplemented: 'not implemented', //server doesnot support facility specified
    serviceTemperoryOverloaded: 'service temperory overloaded', //similar to 500 //response from other service dit not return with in time

    //redirection 3xx listing incomplete
    moved: 'moved'
    //
}

// export default StatusCode