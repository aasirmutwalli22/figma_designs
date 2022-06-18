
export default function FormDiscription ( params: { discription: string } ) {

    // const _style = {
    //     fontFamily: 'Roboto',
    //     fontStyle: 'normal',
    //     fontWeight: 400,
    //     fontSize: '12px',
    //     lineHeight: '14px',
    //     textAlign : 'center',
    //     color: '#424242',
    // }

    return <p className="form-discription"> { params.discription }</p>
}