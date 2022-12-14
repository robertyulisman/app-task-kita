import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import React from "react";
import { PrimaryButton } from "../../Componets";
import { useSelector } from "react-redux";
import axios from "axios";
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import moment from "moment/moment";

const TaskScreenAdd = ({ navigation }) => {

  const { user } = useSelector((state) => state);
  const [form, setForm] = React.useState({
    task: "",
    active_date: "",
    time_start: "",
    time_end: "",
  });
  const [date, setDate] = React.useState(new Date());
  const [timeStart, setTimeStart] = React.useState(new Date());
  const [timeEnd, setTimeEnd] = React.useState(new Date());
  const [loading, setLoading] = React.useState(false);

  const handleOnChangeText = (input, value) => {
    setForm({
      ...form,
      [input]: value,
    });
  };

  const handleSubmitData = async () => {
    setLoading(true);
    const document = {
      dataSource: "Cluster0",
      database: "app_taskita",
      collection: "task",
      document: {
        uid: user.id,
        task: "Demo Create Task Empat rere",
        active_date: moment(date).format("DD/MM/YYYY"),
        progres: "Open",
      },
    };

    console.log("form", document);
    try {
      const { data } = await axios.post(
        "https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1/action/insertOne",
        // // {
        // //   uid: "user.id",
        // //   progres: "Open",
        // //   task: "form.task",
        // //   active_date: "form.active_date",
        // //   // time_start: "form.time_start",
        // //   // time_end: "form.time_end",
        // // },
        // {
        //   dataSource: "Cluster0",
        //   database: "app_taskita",
        //   collection: "task",
        //   document: {
        //     uid: user.id,
        //     task: "Demo Create Task Empat rere",
        //     active_date: "12-12-2022 10:02:00",
        //     progres: "Open",
        //   },
        // },
        document,
        {
          headers: {
            "Content-Type": "application/json",
            "api-key":
              "zYwAQaYVJ2hdF6WVlhy4gFM7i6IOGAcAJ5lips8IYEjIkXjoksjPpuTBZvGjt4uC",
          },
        }
      );
      console.log("data", data);
      setLoading(false);
      alert("Task Berhasil ditambahkan");
      setForm({
        task: "",
        active_date: "",
        time_start: "",
        time_end: "",
      });
      navigation.navigate("Task");
    } catch (err) {
      console.log("err submmit task", err);
      Alert.alert("ERROR", "Error Menambahkan Task");
    }
  };



  // date
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepickerDate = () => {
    showMode('date');
  };

  // time start
  const onChangeTimeStart = (event, selectedDate) => {
    const currentDate = selectedDate;
    setTimeStart(currentDate);
  };

  const showModeTimeStart = (currentMode) => {
    DateTimePickerAndroid.open({
      value: timeStart,
      onChange: onChangeTimeStart,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepickerTimeStart = () => {
    showModeTimeStart('time');
  };

  // time end
  const onChangeTimeEnd = (event, selectedDate) => {
    const currentDate = selectedDate;
    setTimeEnd(currentDate);
  };

  const showModeTimeEnd = (currentMode) => {
    DateTimePickerAndroid.open({
      value: timeEnd,
      onChange: onChangeTimeEnd,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepickerTimeEnd = () => {
    showModeTimeEnd('time');
  };


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
          paddingHorizontal: 20,
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#A85CA3", fontSize: 18 }}>Add New Task</Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          marginTop: 40,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        }}
      >
        {/* {showDate && <RNDateTimePicker value={new Date()} mode="date" positiveButton={() => setShowDate(false)} negativeButton={() => setShowDate(false)} />} */}

        {/* List Input */}
        <View style={{ paddingHorizontal: 20, paddingTop: 40 }}>
          {/* summary task */}
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Sumary Task</Text>
          <TextInput
            placeholder="Type Sumary Task"
            value={form.task}
            onChangeText={(value) => handleOnChangeText("task", value)}
            style={{
              backgroundColor: "#f5f3f2",
              borderWidth: 1,
              borderColor: "#261863",
              padding: 10,
              borderRadius: 12,
              marginTop: 10,
            }}
            textAlignVertical="top"
            numberOfLines={4}
          />

          {/* date */}
          <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20 }}>
            Date
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View style={{
              backgroundColor: "#f5f3f2",
              borderWidth: 1,
              borderColor: "#261863",
              padding: 10,
              borderRadius: 12,

              flex: 1,
              marginRight: 10,
              height: 60,
              alignItems: 'flex-start',
              justifyContent: 'center'
            }} >

              <Text>
                {moment(date).format("DD/MM/YYYY")}
              </Text>
            </View>
            <TouchableOpacity
              onPress={showDatepickerDate}
              style={{
                backgroundColor: "#261863",
                height: 60,
                width: 60,
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
                source={require("../../assets/img/date.png")}
              />
            </TouchableOpacity>
          </View>

          {/* time start */}
          <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20 }}>
            Time Start
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View style={{
              backgroundColor: "#f5f3f2",
              borderWidth: 1,
              borderColor: "#261863",
              padding: 10,
              borderRadius: 12,

              flex: 1,
              marginRight: 10,
              height: 60,
              alignItems: 'flex-start',
              justifyContent: 'center'
            }} >

              <Text>
                {moment(timeStart).format("HH:mm")}
              </Text>
            </View>
            <TouchableOpacity
              onPress={showDatepickerTimeStart}
              style={{
                backgroundColor: "#261863",
                height: 60,
                width: 60,
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
                source={require("../../assets/img/time.png")}
              />
            </TouchableOpacity>
          </View>
          {/* time end */}
          <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20 }}>
            Time End
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View style={{
              backgroundColor: "#f5f3f2",
              borderWidth: 1,
              borderColor: "#261863",
              padding: 10,
              borderRadius: 12,

              flex: 1,
              marginRight: 10,
              height: 60,
              alignItems: 'flex-start',
              justifyContent: 'center'
            }} >

              <Text>
                {moment(timeEnd).format("HH:mm")}
              </Text>
            </View>

            <TouchableOpacity
              onPress={showDatepickerTimeEnd}
              style={{
                backgroundColor: "#261863",
                height: 60,
                width: 60,
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
                source={require("../../assets/img/time.png")}
              />
            </TouchableOpacity>
          </View>

          <PrimaryButton
            onPress={handleSubmitData}
            isLoading={loading}
            customeStyle={{ marginTop: 40, backgroundColor: "#24b81f" }}
            // onPress={()=>onCheckLogin()}
            title={"Submit Data"}
          />
        </View>
      </View>
    </View>
  );
};

export default TaskScreenAdd;
