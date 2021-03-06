const QUOTES =
"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

//container
class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotesData: [],
      isLoading: true };

  }

  componentDidMount() {
    fetch(QUOTES).
    then(res => res.json()).
    then(data => {
      console.log(data.quotes[0]);
      this.setState({
        quotesData: data.quotes,
        isLoading: false });

    });
  }

  changeColors() {
    var colors = [
    "#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c",
    "#9b59b6", "#FB6964", "#342224", "#472E32", "#BDBB99",
    "#77B1A9", "#73A857"];


    var color = Math.floor(Math.random() * colors.length);

    $("html body").animate(
    {
      backgroundColor: colors[color],
      color: colors[color] },

    1000);


    $(".button, a > *").animate(
    {
      backgroundColor: colors[color] },

    1000);

  }

  handleClick() {
    this.setState();
  }

  render() {
    var quote = this.state.quotesData[
    Math.floor(Math.random() * this.state.quotesData.length)];


    if (this.state.isLoading) {
      return React.createElement("p", null, "Loading ...");
    }

    this.changeColors();
    return (
      React.createElement("div", { id: "quote-box" },
      React.createElement("div", { className: "quote-text" },
      React.createElement("i", { className: "fa fa-quote-left" }),
      React.createElement("span", { id: "text" }, quote.quote)),

      React.createElement("div", { className: "quote-author" },
      React.createElement("span", { id: "author" }, "- ", quote.author)),

      React.createElement("div", { id: "buttons" },
      React.createElement("div", null,
      React.createElement("a", {
        id: "tweet-quote",
        href:
        "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
        encodeURIComponent('"' + quote.quote + '" ' + quote.author),

        target: "_blank" },

      React.createElement("i", { className: "fa fa-twitter" })),

      React.createElement("a", {
        id: "tumblr-quote",
        href:
        "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
        encodeURIComponent(quote.author) +
        "&content=" +
        encodeURIComponent(quote.quote) +
        "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button",

        target: "_blank" },

      React.createElement("i", { className: "fa fa-tumblr" }))),


      React.createElement("button", {
        className: "button",
        onClick: this.handleClick.bind(this),
        id: "new-quote" }, "New Quote"))));






  }}


//app
class App extends React.Component {
  render() {
    return (
      React.createElement("div", null,
      React.createElement(QuoteMachine, null)));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("App"));