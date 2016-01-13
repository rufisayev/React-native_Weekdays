'use strict';

//import
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var View = React.View;
var Text = React.Text;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');

var Moment = require('moment');

//create component
var Weekdays = React.createClass({
    render: function () {
        return <View style={styles.container}>
            {this.days()}
        </View>
    },
    days: function () {
        var daysItems = [];
        for(var i = 0; i <= 7; i++){
            var day = Moment().add(i-1,'days').format('dddd');
            daysItems.push(
                <DayItem day={day} daysUntil={i}/>
            )
        }
        return daysItems;
    }
});

//Styke the components
var styles = StyleSheet.create({
    container: {
        flex: 1,//fill up all spaces on the screen,height 100%,width !00%
        flexDirection: 'column',//its default value,it changes justifyContent and alignItems direction,when it beacame 'row',justifyContent x,alignhItems y
        justifyContent: 'center',//from y direction('flex-end','flex-start')
        alignItems: 'center' //from x direction('flex-end','flex-start')
    }
});
//Show the react component in the view
AppRegistry.registerComponent('weekdays', function () {
    return Weekdays;
});