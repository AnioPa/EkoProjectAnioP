import React from 'react';
import ReactDOM from 'react-dom';
import allTrash from './app.js'




class App extends React.Component {

    render() {
        return <div style={{width:'800px',height:'800px', border:'3px solid yellow'}}>
            <SearchBar />
            <Table />
        </div>
    }
}
class TrashList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const trash=this.props.trash.map((element,index)=>{ return <li key={element.name}> należy do kategorii {element.category} wyrzucamy go do  {element.basket}</li>
        });
        if(this.props.trash.length>0){
            return(
                <ul style={{listStyle:'none'}}>
                    {trash}
                </ul>
            )
        }
        return (
            <p>No results!</p>
        )


    }
}

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            filteredTrash: allTrash

        };
    }
    filterTrash(e) {
        const text = e.currentTarget.value;
        const filteredTrash = this.getFilteredTrashForText(text);
        this.setState({
            filteredTrash
        });
    }
    getFilteredTrashForText(text) {
        return allTrash.filter(trash => trash.name.toLowerCase().includes(text.toLowerCase()))
    }

    render() {
        return (
            <div>
                <p>Wpisz co chcesz wyrzucić. Poniżej wyświetli się typ pojemnika ;D</p>
                <input onInput={this.filterTrash.bind(this)}/>
                <TrashList trash={this.state.filteredTrash} />
            </div>
        )
    }
}

class Table extends React.Component {

    render() {
        return <div style={{height:'500px',width:'700px', border:'2px solid green'}}>

            <h2>Filtruje danez bazy?</h2>
            <CategoryRow />
            <Row />
            <CategoryRow />
            <Row />
        </div>
    }
}

class CategoryRow extends React.Component {

    render() {
        return <div style={{height:'100px',width:'700px', border:'1px solid lightblue'}}>
            <h3>Nagłówek</h3>
        </div>
    }
}

class Row extends React.Component {


    render() {
        return <div style={{height:'50px',width:'700px', border:'1px solid red'}}>
            <h4>Wyświetla dane</h4>
        </div>
    }
}



document.addEventListener('DOMContentLoaded',function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )



});