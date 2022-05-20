const style = {
    height: '3rem'
}
export default function Logo(){
    return (
        <img style={style}
            src={require('../../assets/logo-khan.png')}
            className="logo" alt="This is the Khan Academy logo."/>

    );
}