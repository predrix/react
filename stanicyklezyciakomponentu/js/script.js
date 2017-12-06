var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    componentWillMount: function() {
    	console.log('wywoływania przed pierwszym renderem')
    },
    componentDidMount: function() {
        console.log('aktualizacja stanu komponentu');
    },

    componentWillReciveProps: function() {
        console.log('Do spr czy w wyniku zmiany obiektu thisprops nastąpiło odświeżenie');
    },

    shouldComponentUpdate: function() {
       console.log('zwrócony false powstrzymuje powtórne renderowanie');
    }, 

    componentWillUpdate: function() {
       console.log('podobna do componentwillmount');
    },
    componentDidUpdate: function() {
       console.log('moze aktualizować stan komponentu');
    },
    componentWillUnmount: function() {
        console.log('tylko do czyszczenia'); 
    }, 
    render: function() {
        return React.createElement('div', {}, 
                React.createElement('button', {onClick: this.decrement}, 'Dodaj '), 
                React.createElement('button', {onClick: this.increment}, 'Odejmij '),
                React.createElement('span', {}, this.state.counter));
    }
});
var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app2'));

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app3'));
