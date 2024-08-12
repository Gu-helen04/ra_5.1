export default function Cards(props) {  

    return (
        <div className="card">
            { props.children }

            <div className="card-body">
                <h5 class="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button href="#"  className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    );
};

