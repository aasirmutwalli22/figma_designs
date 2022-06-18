import './index.css';

export default function IconButton(params: {src: string}){
    return <button className='icon-button'>
        <img src={params.src} alt='loading'/>
    </button>;
}