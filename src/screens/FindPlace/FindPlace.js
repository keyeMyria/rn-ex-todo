import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import PlaceList from '../../components/PlaceList/PlaceList'
import {connect} from 'react-redux'
import {addPlace} from '../../store/actions'

export class FindPlaceScreen extends Component {

  constructor(props) {
    super(props)
    this
      .props
      .navigator
      .setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this
          .props
          .navigator
          .toggleDrawer({side: "left"})
      }
    }
  }

  itemSelectedHandler = key => {

    const selPlace = this
      .props
      .places
      .find(place => {
        return place.key === key
      })

    this
      .props
      .navigator
      .push({
        screen: "rn-ex-todo.PlaceDetailScreen",
        title: selPlace.name,
        passProps: {
          selectedPlace: selPlace
        }
      })

  }

  render() {
    const {places} = this.props
    return (
      <View>
        <PlaceList places={places} onItemSelected={this.itemSelectedHandler}/>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {places: state.places.places}
}

export default connect(mapStateToProps)(FindPlaceScreen)