import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const nome = "Cauã";

  return <View style={styles.container}>

    {/* <View>
      <Text>Jogo da Velha</Text>
      <Text>Vencedor: </Text>
    </View> */}
    
    <View style={styles.gameBox}>
        <View style={styles.game}>

            <View>
              <TouchableOpacity>
                <Text style={styles.text}>X</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Text style={styles.text}>X</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Text style={styles.text}>X</Text>
              </TouchableOpacity>
            </View>

        </View>

        <View style={styles.game}>

            <View>
              <TouchableOpacity>
                <Text style={styles.text}>X</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Text style={styles.text}>X</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Text style={styles.text}>X</Text>
              </TouchableOpacity>
            </View>

        </View>

        <View style={styles.game}>

            <View>
              <TouchableOpacity>
                <Text style={styles.text}>X</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Text style={styles.text}>X</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Text style={styles.text}>X</Text>
              </TouchableOpacity>
            </View>
            
        </View>

    </View>
  
  </View>

} 


const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

      },

      gameBox: {
        height: 400,
        width: 400,
        padding: 20
      },

      game: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'grey'
      },

      text: {
        fontSize: 60,
        fontFamily: "monospace"

      },

      
      

})