interface _Duration {
    days?: number
    hours?: number
    minutes?: number
    seconds?: number
    millis?: number
}

class Duration implements _Duration {

    _millisPerSecond = 1000
    _millisPerMinute = 1000 * 60
    _millisPerHour = 1000 * 60 * 60
    _millisPerDay = 1000 * 60 * 60 * 24

    days: number
    hours: number
    minutes: number
    seconds: number
    millis: number

    constructor( duration: _Duration ) {
        this.days = duration.days ?? 0
        this.hours = duration.hours ?? 0
        this.minutes = duration.minutes ?? 0
        this.seconds = duration.seconds ?? 0
        this.millis = duration.millis ?? 0
    }

    get inMillis () {
        return this.millis +
            ( this.seconds * this._millisPerSecond ) +
            ( this.minutes * this._millisPerMinute ) +
            ( this.hours * this._millisPerHour ) +
            ( this.days * this._millisPerDay )
    }

    get inSeconds (): number {
        return Math.trunc( this.inMillis / this._millisPerSecond )
    }
    get inMinutes (): number {
        return Math.trunc( this.inMillis / this._millisPerMinute )
    }
    get inHours (): number {
        return Math.trunc( this.inMillis / this._millisPerHour )
    }
    get inDays (): number {
        return Math.trunc( this.inMillis / this._millisPerDay )
    }
}

// error here
// new Duration(hours: 24).inDays wont return 1



export default Duration