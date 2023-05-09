import { View,StyleSheet,TouchableOpacity,Image,FlatList, SafeAreaView,Text, Platform,StatusBar } from "react-native";

export default function App (){
    return (
        <SafeAreaView  style={styles.container}>
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <View style={styles.leftHeader}>
                    <Image source={require('./assets/charityapp.png')} 
                    alt="app logo"
                    style={styles.logo}/>
                    <Text style={styles.brandName}>CharityApp</Text>
                </View>
                <Image source={require('./assets/user.png')}
                alt="icon"
                style={styles.headerIcon}/>
             </View>

             <View style={styles.body}>             
                <View style={styles.actionBlock}>
                    <View style={styles.actionBox}>

                    </View>
                    <View style={styles.actionBox}>

                    </View>
                    <View style={styles.actionBox}>

                    </View>
                    <View style={styles.actionBox}>

                    </View>
                </View>
             

                <View style={styles.recent}>
                    <View style={styles}>
                        <View style={styles.donationDetails}>
                            <Text style={styles.donationAmount}>₦1200</Text>
                            <Text style={styles.donationInfo}>1 minute ago</Text>
                        </View>
                        <Text style={styles.donatedBy}>Donated by samplaagmail.com</Text>
                    </View>
                </View>

            </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:Platform.OS =='android' ? StatusBar.currentHeight: 0,
        paddingHorizontal:8
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between'

    },
    leftHeader:{
        flexDirection:'row',
        alignItems:'center'

    },
    logo:{
        width:52,
        height:52,
        marginRight:4

    },
    brandName:{
        fontSize:28,
        fontWeight:'bold',
        color:'red'

    },
    headerIcon:{
        width:48,
        height:46

    },
    body:{
        flex:1,
        marginTop:10
    },
    actionBlock:{
        flex:2.5,
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        backgroundColor:'#E34DA2',
        padding:8,
        borderRadius:10
    },
    recent:{
        flex:3.5,
    },
    actionBox:{
        width:'49%',
        height:'49%',
        backgroundColor:'#77037B',
        marginBottom:12, //change later to gap: set on parent
        borderRadius:10
       
    },
    wrapper:{
        flex:1,
        paddingHorizontal:12
    }
})

//ho is leap year calculated using function




























// //expense categories
/* export const expCategories = [
    {id:1,title:'Transportation',type:'need',color:'#473C33'},
    {id:2,title:'Food and drinks',type:'want',color:'#4E6C50'},
    {id:3,title:'Clothes and accessories',type:'want',color:'#820000'},
    {id:4,title:'Accommodation/Rent',type:'need',color:'#3D1766'},
    {id:5,title:'Cosmetics',type:'want',color:'#1A0000'},
    {id:6,title:'Internet subscription',type:'want',color:'#58287F'},
    {id:7,title:'Electricity',type:'want',color:'#3C6255'},
    {id:8,title:'Cleaning water',type:'need',color:'#0A2647'},
    {id:9,title:'Household energy',type:'need',color:'#2155CD'},
    {id:10,title:'Groceries',type:'need',color:'#3C2A21'},
    {id:11,title:'Health',type:'need',color:'#850000'},
    {id:12,title:'Investment',type:'investment',color:'#1A120B'},
    {id:13,title:'Entertainment',type:'want',color:'#2B3467'},
    {id:14,title:'Aid to others',type:'want',color:'#2D033B'},
    {id:15,title:'Debt payments',type:'debt',color:'#594545'},
    {id:16,title:'Courses',type:'investment',color:'#251B37'},
    {id:17,title:'Books',type:'investment',color:'#400D51'},
    {id:18,title:'Electronics',type:'wants',color:'#D2001A'},
    {id:19,title:'Automibile',type:'wants',color:'#181818'},
    {id:20,title:'Other wants',type:'wants',color:'#472D2D'},
    {id:21,title:'Other needs',type:'needs',color:'#355764'}
];
*/