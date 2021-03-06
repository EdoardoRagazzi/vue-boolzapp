//--------Milestone 1-------//
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse•Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

const app = new Vue(
    {
        el: '#app',
        data: {

            stringa: '',
            newData: '',
            counter: 0,
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            hour: '16:30:00',
                            date: dayjs().format('dddd'),
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            hour: '16:30:00',
                            date: dayjs(new Date()).format('dddd'),
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            hour: '16:30:00',
                            date: dayjs(new Date()).format('dddd'),
                            text: 'Tutto fatto! ',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            hour: '16:30:00',
                            date: dayjs().format('dddd'),
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            hour: '16:30:00',
                            date: dayjs().format('dddd'),
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            hour: '16:30:00',
                            date: dayjs().format('dddd'),
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Mariano',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            hour: '16:30:00',
                            date: dayjs().format('dddd'),
                            text: 'si ok forse ',
                            status: 'sent'
                        },
                        {
                            hour: '16:30:00',
                            date: dayjs().format('dddd'),
                            text: 'Bene ',
                            status: 'received'
                        },
                        {
                            hour: '16:30:00',
                            date: dayjs().format('dddd'),
                            text: 'Puo darsi',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Marzio',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            hour: '16:30:00',
                            date: dayjs().format('dddd'),
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            hour: '16:30:00',
                            date: dayjs().format('dddd'),
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            hour: '16:30:00',
                            date: dayjs().format('dddd'),
                            text: 'Non sono a casa',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Carmelo',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            hour: '16:30:00',
                            date: dayjs().format('dddd'),
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            hour: '16:30:00',
                            date: dayjs().format('dddd'),
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            hour: '16:30:00',
                            date: dayjs().format('dddd'),
                            text: 'Forse si',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Edo',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            hour: '16:30:00',
                            date: dayjs().format('dddd'),
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            hour: '16:30:00',
                            date: dayjs().format('dddd'),
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            hour: '16:30:00',
                            date: dayjs().format('dddd'),
                            text: "Potrebbe anche darsi,basta che mi scrivi e ci mettiamo d'accordo",
                            status: 'sent'
                        }
                    ],
                }
            ]
        },
        //-------------------METODI AND FUNCTION----------------------//
        methods: {
            changeUtente(index) {
                this.counter = index;
            },
            addMessage() {
                const destinatario = this.contacts[this.counter]
                if (this.newData != '') {
                    const messaggio = {
                        text: this.newData,
                        hour: dayjs().format('h:m:s'),
                    }
                    destinatario.messages.push(messaggio)
                    myfunction();
                    function myfunction() {
                        setTimeout(function () {
                            if (this.newData = messaggio) {
                                const messaggioReceived = {
                                    text: 'Ahn ok ',
                                    hour: dayjs().format('hh:mm:ss'),
                                    status: 'received'
                                }
                                destinatario.messages.push(messaggioReceived)
                            }
                            this.newData = '';
                        }, 1000);
                    }
                }
            },
            deleteMessage(index) {
                // const messaggio = this.contacts[this.counter].messages
                // console.log(messaggio)

                this.contacts[this.counter].messages.splice(index, 1)
            }
        },
        computed: {
            search() {
                return this.contacts.filter((element) => {
                    return element.name.toLowerCase().includes(this.stringa.toLowerCase())
                }

                )
            }

        }
    }
);
