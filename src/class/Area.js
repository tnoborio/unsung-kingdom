export default class Area extends Phaser.GameObjects.Zone {
  constructor (scene, zone_x, zone_y, zone_width, zone_height) {
    super(scene, zone_x, zone_y, zone_width, zone_height)
    this.setOrigin(0, 0)
    this.lastEnteredFrame = 0
    scene.physics.world.enable(this)
    scene.physics.add.overlap(this, scene.player, () => {
      const newEntered = this.lastEnteredFrame < (scene.game.loop.frame - 2) // TODO: refactoring
      this.lastEnteredFrame = scene.game.loop.frame
      if (!newEntered) return
      if (this.event) this.event()
    })
    this.setActive(true)
  }
  setEvent (callback) {
    this.event = callback
    return this
  }
  setId (id) {
    this.id = id
    return this
  }
}
