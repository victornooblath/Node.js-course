console.log('Starting')
// setTimeout allows us to run some code after a specific amount of time has passed and set time out
setTimeout(() => {
    console.log('2 second timer')
}, 2000 )

setTimeout(() => {
    console.log('0 second timer')
}, 0 )
console.log('Stopping')