import { dogEventFound } from '../event/dogEvent'
export default {
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(3), '5')
  }
}
