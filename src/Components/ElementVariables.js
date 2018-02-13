import React, { Component } from 'react';
import NextDay from './NextDay'


class ElementVariables extends Component {
    constructor(){
        super()
        this.state = {
            day: 'monday'
        }
        this.changeDay = this.changeDay.bind(this)
    }
    changeDay(day){
        this.setState({day,})
    }

    render() {
        var day = this.state.day

        var todoList = null
        if (day === 'monday'){
            todoList = (
                <ul>
                    <h1>Monday Todo's</h1>
                    <li>Do mondays toy prob</li>
                    <li>Drink coffee</li>
                </ul>
            )
        }

        if(day === 'tuesday'){
            todoList = (
                
                <ul>
                    <h1>Tuesday Todo's</h1>
                    <li>Do Tuedays Toy prob</li>
                    <li>Drink coffee</li>
                </ul>
            )
        }
        if(day === 'wednesday'){
            todoList = (
                
                <ul>
                    <h1>Wednesday Todo's</h1>
                    <li>Do Wednesdays Toy prob</li>
                    <li>Drink coffee</li>
                </ul>
            )
        }
        if(day === 'thursday'){
            todoList = (
                <ul>
                    <h1>Thursday Todo's</h1>
                    <li>Do thursdays Toy prob</li>
                    <li>Drink coffee</li>
                </ul>
            )
        }
        if(day === 'friday'){
            todoList = (
                <ul>
                    <h1>Friday Todo's</h1>
                    <li>Friday is simulation so...</li>
                    <li>Drink coffee</li>
                </ul>
            )
        }
        return (
            <div>
                {todoList}
               <NextDay day={this.state.day} changeDay={this.changeDay} changeView={this.props.changeView}/>
               
            </div>
        );
    }
}

export default ElementVariables;