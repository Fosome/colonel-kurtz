/**
 * DeepRemove
 * Remove a block and all of its children
 */
export default function(blocks, id) {
  return blocks.filter(function(node) {
    for (var n = node; n; n = n.parent) {
      if (n.id == id) return false
    }
    return true
  })
}