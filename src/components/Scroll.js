const Scroll = (props) =>{
    console.log(props);
    return (
        <div style={{overflowY: 'scroll', border:'1px solid black',height:'620px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;