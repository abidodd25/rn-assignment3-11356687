import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={{ backgroundColor: "#F7F0E8", flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 60,
          justifyContent: "space-between",
          marginLeft: 8,
          marginRight: 30,
        }}
      >
        {/** Test */}
        <View>
          <Text style={{ marginLeft: 25, fontSize: 34, fontWeight: "bold" }}>
            Hello, Devs{" "}
          </Text>
          <Text
            style={{
              marginTop: 2,
              marginLeft: 25,
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            14 tasks today
          </Text>
        </View>
        <View>
          {/*Profile Image */}
          <View
            style={{
              backgroundColor: "#FBF9F7",
              borderRadius: 25,
              height: 58,
              width: 51,
            }}
          >
            <Image source={require("./assets/person.png")} />
          </View>
        </View>
      </View>
    </View>
  );
}
