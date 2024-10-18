import { Text, View, StyleSheet,TouchableOpacity,Image } from 'react-native';
import img from './assets/1.png'


export default function App() {
  return (
    <View style={styles.container}>
        <View style={{flex: 1,alignItems:'center',margin: '5%'}}>
          <Text style={{fontFamily: 'VT323',fontSize: 22,fontWeight: 400}}
          >A premium online store for sporter and their stylish choice</Text>
        </View>
        
        <View style={{width: '100%',height: 278,backgroundColor:'#E941411A',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity>
                <Image source={img} style={{width: 202,height: 180}}>
                </Image>
            </TouchableOpacity>
        </View>

        <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontWeight: 700,fontSize: 24,fontFamily:'Ubuntu'}}>
                POWER BIKE</Text>
            <Text style={{fontWeight: 700,fontSize: 24,fontFamily:'Ubuntu'}}>
                SHOP</Text>
        </View>

        <View style={{flex: 1,width: '90%',height: 60,justifyContent:'center',alignItems:'center',margin: '5%'}}>
          <TouchableOpacity style={{backgroundColor:'#E94141',width:'90%',
          height: 60,borderRadius: 10,justifyContent:'center',alignItems:'center',
          color: 'white',fontFamily:'VT323',fontWeight: 400,fontSize: 18}}>
                Get Started
          </TouchableOpacity>
        </View>
        
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});
