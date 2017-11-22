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
/*    componentWillMount: function() {
        concole.log(wywoływania przed pierwszym renderem);
    },

    componentDidMount: function() {
        concole.log(aktualizacja stanu komponentu);
    },

    componentWillReciveProps(nextProps): function() {
        concole.log(Do spr czy w wyniku zmiany obiektu thisprops nastąpiło odświeżenie);
    },

    shouldComponentUpdate(nextProps, nextState): function() {
        concole.log(zwrócony false powstrzymuje powtórne renderowanie);
    },

    componentWillUpdate: function() {
        concole.log(podobna do componentwillmount);
    },
    componentDidUpdate(prevProps, prevState): function() {
        concole.log(moze aktualizować stan komponentu);
    },
    componentWillUnmount: function() {
        concole.log(tylko do czyszczenia); 
    }, */
    render: function() {
        return React.createElement('div', {onClick: this.decrement},
            React.createElement('button', {}, 'Licznik ' + this.state.counter)
        );
    }
});
var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
