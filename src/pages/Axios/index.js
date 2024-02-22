import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Axios = () => {
    const [data, setData] = useState(null);
    
    const [title, setTitle] = useState("");
    const [viewers, setViewers] = useState("");
    const [titleButton, setTitleButton] = useState("Save");
    const [selectedId, setSelectedId] = useState();

    useEffect(() => {
      getData()
    }, [data])

    const getPost = () => {
        const body = {
            id : '90923',
            title: 'New Title'
        }

        fetch('https://jsonplaceholder.typicode.com/posts/', {
        method:'POST',
        headers:{
            'Content-type' : 'application/json'
        },
        body : JSON.stringify(body)
        }).then((response) => response.json()).then((response) => setPost(response))
    }

    // const getData = async () =>{
    //     await axios.get('https://reqres.in/api/users/').then(res => setData(res.data.data)).catch(err => console.log(err))
    // } 

    const getData = () =>{
      axios.get('http://10.0.2.2:3000/posts').then(res => setData(res.data)).catch(err => console.log(err))
  } 

    const postData = () => {
        const body = {
            title: title,
            viewers:viewers
        }
      
        if(titleButton == 'Save'){
            axios.post('http://10.0.2.2:3000/posts', body).then(res => {
            // getData();
            setTitle(); 
            setViewers();
          }).catch(err => console.log(err));
        } else {
          axios.put(`http://10.0.2.2:3000/posts/${selectedId.id}`, body).then(res => {
            // getData();
            setTitle(); 
            setViewers();
          }).catch(err => console.log(err));
        }
        
    }

    const selectItem = (item) => {
        setTitle(item.title);
        setViewers(item.viewers);
        setTitleButton('Update');
        setSelectedId(item)
    }

    const deleteData = (item) => {
      axios.delete(`http://10.0.2.2:3000/posts/${item.id}`).then(res => {
            // getData();
            console.log(`success delete ${item.title}`)
      }).catch(err => console.log(err));
    }

    // deleteConfirm = (item) => {
    //   Alert.alert('Warning','Are you sure you want to delete?',
    //   {
    //     text : 'No',
    //     onPress: () =>'Cancel'
    //   },
    //   {
    //     text: 'Yes',
    //     onPress: () => deleteData(item.id)
    //   })
    // }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Form</Text>
        <TextInput style={styles.input} value={title} onChangeText={(e) => setTitle(e)} placeholder='Title'/> 
        <TextInput style={styles.input}  value={viewers} onChangeText={(e) => setViewers(e)} placeholder='Views'/>
        <View style={styles.buttonStyle}>
          <Button title={titleButton} onPress={postData} />
        </View>
        
      </View>
      <View style={styles.line}></View>
      <View style={styles.list}>
      {data && data.map((v, idx) => (
        <View>
        <Text key={idx} onPress={() => selectItem(v)}>{idx + 1}. {v.title}</Text>
        <Text onPress={() => deleteData(v)} key={idx}>Remove</Text>
        </View>
        ))}
        
      </View>
    </View>


  )
}

export default Axios

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centers content vertically in the container
        alignItems: 'center', // Centers content horizontally in the container
      },
      textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      input: {
        height: 40,
        marginVertical: 10,
        width: 300,
        borderWidth: 1,
        padding: 10,
      },
      buttonStyle: {
        marginTop: 20,
        width: 100, // Specify the width of the button
        // No need to set justifyContent or alignItems here since Button component doesn't accept these styles
      },
      list: {
        // marginVertical:10,
        marginHorizontal:60,
        alignItems:"left"
      },
      line : {
        height:1,
        backgroundColor:"gray",
        marginHorizontal:10,
        marginVertical:10
      }
})