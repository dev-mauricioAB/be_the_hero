import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}


// import React from 'react';
// import { Feather } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import { View, Image, Text, TouchableOpacity } from 'react-native';

// import logoImg from './src/assets/logo.png';

// import styles from './src/pages/Incidents/styles';
// import { FlatList } from 'react-native-gesture-handler';

// export default function Incidents() {
//   const navigation = useNavigation();

//   function navigationToDetail() {
//     navigation.navigate('Detail');
//   }
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image souce={logoImg} />
//         <Text style={styles.headerText}>
//           Total de <Text style={styles.headerTextBold} >0 casos</Text>.
//         </Text>
//       </View>

//       <Text style={styles.title}>Bem-vindo!</Text>
//       <Text style={styles.description}>Escolha um dos casos
//       abaixo e seja um herói!</Text>

//       <FlatList
//         data={[1, 2, 3]}
//         style={styles.incidentList}
//         keyExtractor={incident => String(incident)}
//         showsVerticalScrollIndicator={false}
//         renderItem={() => (
//           <View style={styles.incident}>
//             <Text style={styles.incidentProperty}>ONG:</Text>
//             <Text style={styles.incidentValue}>APAD</Text>

//             <Text style={styles.incidentProperty}>CASO:</Text>
//             <Text style={styles.incidentValue}>Castração da gata Mimi</Text>

//             <Text style={styles.incidentProperty}>VALOR:</Text>
//             <Text style={styles.incidentValue}>R$ 120,00</Text>

//             <TouchableOpacity
//               style={styles.detailsButton}
//               onPress={navigationToDetail}
//             >
//               <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
//               <Feather name="arrow-right" size={16} color="#E02041" />
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// }