import Button from "./Button";


const Toolbar = () => {
    
    return (
        <>
            <div onClick={()=>alert('You click on the toolbar')}>
                <Button click={ params => alert(params)} vlaue={'This is play button'}>Play Movie</Button>
                <Button click={ params => alert(params)} vlaue={'This is upload button'}>Upload Image</Button>
            </div>        
        </>
    );
};

export default Toolbar;