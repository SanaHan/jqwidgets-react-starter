# jqwidgets-react-starter
   
   Starter project to load JQWidgets inside reactjs. Uses webpack. I tried to put the least possible amount of configuration.
   
     npm install
     npm start
   
go to [http://localhost:3333](http://localhost:3333) . It will show the menu demo 

## Other demos
Full list of demos is installed in node_modules/jqwidgets-framework/demos/react/app
      
To replace the demo by another one:   
   
   1. grab the demo installed in  node_modules (e.g. demo panel)
   
    cp node_modules/jqwidgets-framework/demos/react/app/***panel***/defaultfunctionality/app.js src/App.js

   1. inside src/App.js, change the import location
    
    import JqxPanel from '***jqwidgets-framework/***jqwidgets-react/react_jqxpanel.js';

   2. add the export default keyword to class declaration
    
    ***export default*** class App extends React.Component {

   3. comment the last line 
    
    ***//***ReactDOM.render(<App />, document.getElementById('app'));

I have not tried all demos, but theses steps worked for me so far... 
