import React from 'react'
import { View } from 'react-native'
import StylesText from './StylesText'

const RepositoryStats = (props) => {
  return (
    <View
      key={props.id}
      style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}
    >
      <View>
        <StylesText aling="center">{props.address.city}</StylesText>
        <StylesText aling="center" fontWeight="bold" fontSize="subheading">
          {props.address.zipcode}
        </StylesText>
      </View>
      <View>
        <StylesText aling="center"> {props.address.street} </StylesText>
        <StylesText aling="center"> {props.address.suite} </StylesText>
      </View>
      <View>
        <StylesText aling="center" fontWeight="bold" style={{ flex: 1 }}>
          {props.company.name}
        </StylesText>
      <StylesText aling="center"> {props.website} </StylesText>
      </View>
    </View>
  )
}

export default RepositoryStats
