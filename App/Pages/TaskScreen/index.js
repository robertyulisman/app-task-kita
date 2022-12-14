import axios from "axios";
import moment from "moment";
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import { ICNotif } from "../../assets";
import CardTask from "../../Componets/CardTask";

export default TaskScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state);
  const [dataTask, setDataTask] = React.useState([]);

  const handleAddTask = () => {
    navigation.navigate("TaskScreenAdd");
  };

  const getTask = async () => {
    try {
      const { data } = await axios.post(
        "https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1/action/find",
        {
          dataSource: "Cluster0",
          database: "app_taskita",
          collection: "task",
          filter: {
            userId: user?.id,
            active_date: moment(new Date()).format("DD/MM/YYYY"),
          },
        },
        {
          headers: {
            "api-key":
              "zYwAQaYVJ2hdF6WVlhy4gFM7i6IOGAcAJ5lips8IYEjIkXjoksjPpuTBZvGjt4uC",
          },
        }
      );
      console.log("data", data);
      setDataTask(data.documents);
    } catch (err) {
      console.log("err get data task", err);
    }
  };

  React.useEffect(() => {
    getTask();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#261863",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ color: "#A85CA3", fontSize: 18 }}>Agitha</Text>
        </View>
        <View>
          <Image source={ICNotif} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          marginTop: 20,
          alignItems: "center",
          backgroundColor: "#A85CA3",
          paddingTop: 25,
          paddingBottom: 50,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <TouchableOpacity onPress={handleAddTask}>
          <Text style={{ color: "white", fontSize: 14 }}>Add New</Text>
        </TouchableOpacity>
        <View>
          <Text style={{ color: "white", fontSize: 14 }}>Filter Task</Text>
        </View>
      </View>

      {/* All Task Start */}
      <View
        style={{
          width: "100%",

          paddingHorizontal: 20,
          marginTop: -30,
          alignItems: "center",
          backgroundColor: "white",
          paddingTop: 15,
          paddingBottom: 50,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          height: "100%",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>All Task</Text>

        {/* List Of Task */}

        <CardTask />
        <CardTask />
        <FlatList
          keyExtractor={(item) => `${item.id}`}
          data={dataTask}
          renderItem={({ item, index }) => (
            <View data={item}>
              <CardTask />
            </View>
          )}
          ListEmptyComponent={
            <View>
              <Text>No Data</Text>
            </View>
          }
        />
      </View>
      {/* All Task Finish */}
    </View>
  );
};
