import logoImage from './../../assets/logo-khan.png'
const style = {
    height: '3rem'
}
export default function Logo(){
    return (
        <section className="logo-wrapper">
            <img style={style}
            src={logoImage}
            className="logo" alt="This is the Khan Academy logo."/>
        </section>


    );
}