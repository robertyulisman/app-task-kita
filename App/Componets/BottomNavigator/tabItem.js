import React from 'react';
import {
  StyleSheet, 
  Text, 
  TouchableOpacity,
  Image
} from 'react-native';
import {
  IcHomeActive,
  IcHomeInActive,
  IcReportActive,
  IcReportInActive,
  IcTaskActive,
  IcTaskInActive,
  IcSettingsActive,
  IcSettingsInActive

} from '../../assets'

const TabItem = ({isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
    
      if(label === "Home") return isFocused ? <Image source={IcHomeActive} style={styles.icStyle}/> : <Image source={IcHomeInActive} style={styles.icStyle}/>
      if(label === "Task") return isFocused ? <Image source={IcTaskActive} style={styles.icStyle}/> : <Image source={IcTaskInActive} style={styles.icStyle}/>
      if(label === "Report") return isFocused ? <Image source={IcReportActive} style={styles.icStyle}/> : <Image source={IcReportInActive} style={styles.icStyle}/>
      if(label === "Settings") return isFocused ? <Image source={IcSettingsActive} style={styles.icStyle}/> : <Image source={IcSettingsInActive} style={styles.icStyle}/>

      return <Image source={IcHomeActive} style={styles.icStyle}/>
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
        <Icon />
        
        <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    icStyle:{
      width:20,
      height:20
    },
    text: (isFocused) => ({
        fontSize: 11,
        color: isFocused ? 'white' : '#a3a3a3',
        fontWeight:'bold',
        marginTop: 8
    })
});