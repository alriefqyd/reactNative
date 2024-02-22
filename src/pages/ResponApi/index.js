import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native';

const ResponAPi = () => {
    const [data, setData] = useState('0');
    const [post, setPost] = useState('-');
    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts/1')
        // .then((response) => response.json()) // jadikan respon dalam bentuk json
        // .then((json) => setData(JSON.stringify(json)));

        // const body = {
        //     id : '90923',
        //     title: 'New Title'
        // }
        // fetch('https://jsonplaceholder.typicode.com/posts/', {
        //     method:'POST',
        //     headers:{
        //         'Content-type' : 'application/json'
        //     },
        //     body : JSON.stringify(body)
        // }).then((response) => response.json()).then((response) => console.log(response))
    }, [])

    

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

    const getData = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json()) // jadikan respon dalam bentuk json
        .then((json) => setData(json));
    } 

  return (
    <View>
           <Button title='Generate' onPress={getData}></Button>
           <Text>{data.id},{data.title}</Text>
           <Button title='Post' onPress={getPost}></Button>
           <Text>{post.id}</Text>
    </View>
//    <Text style={{textColor:'red'}}>a</Text>

  )
}

export default ResponAPi
