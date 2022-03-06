import React from 'react'
import {View} from 'react-native'


const ItemSeprator=({height,width})=>{
    return<View style={{width,height}}/>
}
ItemSeprator.defaultProps={
    height:0,
    width:0
}
export default ItemSeprator