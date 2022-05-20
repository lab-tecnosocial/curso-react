import logoImage from './../../assets/logo-khan.png'
const style = {
    height: '3rem'
}
export default function Logo(){
    return (
        <img style={style}
            src={logoImage}
            className="logo" alt="This is the Khan Academy logo."/>

    );
}