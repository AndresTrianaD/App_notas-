
const routeName = useNavigationState(state => state.routes[state.index].name)

const onPress = () => {
    if (routeName === 'Home') {
      // Navega a la pantalla 'Details'
      navigation.navigate('Details');
    } else if (routeName === 'Settings') {
      // Realiza alguna otra acción
      console.log('Button pressed in Settings screen');
    }
   };



<View style={{position:'relative',bottom:45,alignItems:'center', justifyContent:'space-around',height:85}}>
                    
{routeName === 'notas' && (
    //edit
    //form
    //pencil       entypo
    <TouchableOpacity onPress={() => console.log('Botón presionado')} style={styles.IconoCentro}>
        <AntDesign name="plus" size={33} color= '#333333'/>
    </TouchableOpacity>
)}
{routeName === 'buscar' && (
    //magnifying-glass
    <TouchableOpacity onPress={() => console.log('Botón presionado')} style={styles.IconoCentro}>
        <MaterialCommunityIcons name="cursor-text" size={33} color= '#333333'/>
    </TouchableOpacity>
)}
{routeName === 'listaTareas' && (
    <TouchableOpacity onPress={() => console.log('Botón presionado')} style={styles.IconoCentro}>
        <MaterialIcons name="exposure-plus-1" size={33} color= '#333333'/>
    </TouchableOpacity>
)}
{routeName === 'ajustes' && (
    <TouchableOpacity onPress={() => console.log('Botón presionado')} style={styles.IconoCentro}>
        <AntDesign  name="info" size={33} color= '#333333'/>
    </TouchableOpacity>
)}

</View>