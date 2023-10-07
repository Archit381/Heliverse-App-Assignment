import { View, Text, Image, TouchableOpacity } from "react-native";
import { PlusIcon } from "react-native-heroicons/outline";
import React, { useState, useEffect } from "react";

const newTeamMember = [];

const Card = ({ data }) => {
  const [status, setStatus] = useState(false);
  
  const addBtn = () => {
    if (data.available) {
      return (
        <View className="my-2 ml-auto">
          <TouchableOpacity
            onPress={() => {
              if (status == true) {
                removeFromTeam();
                setStatus(false);
              } else if (status == false) {
                addToTeam();
                setStatus(true);
              }
            }}
          >
            <View className="flex-row items-center mx-3">
              <PlusIcon size="15" color={"#19073b"} />
              <Text
                style={{ color: "#19073b", fontWeight: "500", fontSize: 10 }}
              >
                {status ? "Remove from Team" : "Add To Team"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

  const addToTeam = () => {
    const teamMember = {};
    teamMember.name = data.first_name + data.last_name;
    teamMember.email = data.email;
    teamMember.gender = data.gender;
    teamMember.avatar = data.avatar;
    teamMember.domain = data.domain;

    newTeamMember.push(teamMember);

    console.log(newTeamMember);
  };

  const removeFromTeam = () => {

    for(let i=0;i<newTeamMember.length;i++){
        const teamMemberInfo=newTeamMember[i];

        if(teamMemberInfo.name===(data.first_name+data.last_name)){
          
          newTeamMember.splice(i,1);
        }
    }

    console.log(newTeamMember);
  };

  return (
    <View className={" bg-white mx-10 rounded-lg "} style={{ elevation: 5 }}>
      <View className={` flex flex-row`}>
        <Image
          source={{ uri: data.avatar }}
          className={`flex my-3 -left-4 rounded-xl`}
          style={{
            height: 50,
            width: 50,
            borderColor: "#19073b",
            borderWidth: 1,
            backgroundColor: "#ffffff",
          }}
        />
        <View className={`flex-col my-2`}>
          <Text style={{ color: "#19073b", fontSize: 20, fontWeight: "500" }}>
            {`${data.first_name} ${data.last_name}`}
          </Text>
          <View className="flex-row">
            <Text
              style={{ color: "black", fontWeight: "500" }}
            >{`${data.gender}`}</Text>
            <Text> | </Text>
            <Text
              style={{ color: "black", fontWeight: "500" }}
            >{`${data.domain}`}</Text>
          </View>

          <Text style={{ color: "black", marginTop: 12, fontWeight: "400" }}>
            {`${data.email}`}
          </Text>
        </View>

        {addBtn()}
      </View>
    </View>
  );
};

export default Card;
