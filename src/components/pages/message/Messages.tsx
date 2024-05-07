import React, { useEffect, useState } from "react";
import { useAuth } from "../../providers/useAuth";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { IMessage } from "../../../type";
import { Avatar, Button, Card, Divider, Fab, Grid, List, ListItem, ListItemText, TextField } from "@mui/material";
import {Send as SendIcon} from '@mui/icons-material'

const Messages: React.FC = () => {
    const {user, db} = useAuth();
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [message, setMessage] = useState('')

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'messages'), (snapshot) => {
            const newMessages: IMessage[] = [];
            snapshot.forEach((doc) => {
                newMessages.unshift(doc.data() as IMessage);
            });
            setMessages(newMessages)
            
        });
    
        return () => unsub(); // Отписываемся от слушателя при размонтировании компонента
    }, [db]);

      const addMessageHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (user) {
            
          try {
            await addDoc(collection(db, 'messages'),{
                user,
                message,
                timestamp: new Date(),
            })
            setMessage('');
          } catch (error) {
            console.error('Error adding document:', error);
          }
          
        }
      };

    return(
            <Card>
                <List style={{height: '65vh', overflow: 'auto'}}>
                    {messages.map((msg, idx) => (
                    <ListItem key={idx}>
                        <Grid container sx={msg.user.id === user?.id ? {textAlign: 'right'}: {}}>
                            <Grid display='flex' justifyContent={msg.user.id === user?.id ?'flex-end': 'flex-start'} item xs={12}>
                                <Avatar
                                sx={{
                                     width: 30,
                                     height: 30,
                                }}
                                src={msg.user.avatar}>
                                </Avatar> 
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText
                                 primary={msg.message} >
                                </ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText
                                 secondary={msg.user.name}>
                                </ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                ))}
                </List>
                <Divider/>
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField
                        id="outlined-basic-email"
                        label="Введите сообщение"
                        fullWidth
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                        />
                    </Grid>
                    <Grid item xs={1}>
                    <Fab color='primary' onClick={addMessageHandler}>
                        <SendIcon/>                            
                    </Fab>
                    </Grid>
                </Grid>
            </Card>
    )
}

export default Messages;
