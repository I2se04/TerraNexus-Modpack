ServerEvents.loaded(event => {
    const world = event.server.overworld()

    if (!world.persistentData.gamerulesApplied) {
        
        event.server.runCommand('gamerule sendCommandFeedback false')
        
        world.persistentData.gamerulesApplied = true
        console.info('Gamerules have been applied.')
    }
})