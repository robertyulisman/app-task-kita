import { View, Text, Image } from "react-native";
import React from "react";

const CardTask = () => {
  return (
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      <View
        style={{
          marginRight: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
          source={require("../../assets/img/dateGray.png")}
        />
        <Text style={{ fontWeight: "bold" }}>10 Apr 22</Text>
        <Text>12 : 00</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          backgroundColor: "#f5f3f2",
          padding: 12,
          borderRadius: 12,
        }}
      >
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 12,
            backgroundColor: "#f0554a",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 32, color: "white" }}>
            M
          </Text>
        </View>
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={{ fontWeight: "bold" }}>Meeting With Ceo</Text>
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <View
              style={{
                height: 5,
                width: "50%",
                backgroundColor: "#f0554a",
              }}
            />
            <View
              style={{
                height: 5,
                width: "50%",
                backgroundColor: "#d6d6d6",
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardTask;
