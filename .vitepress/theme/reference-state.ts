import { ref } from 'vue'

// Query parameters distinguish the reference view without copying articles or
// moving their canonical URLs. Normal task links return to the task navigation.
export const referenceSelection = ref('')
export const articleIndexSelection = ref(false)
export const sectionSelection = ref('')
export function updateReferenceSelection(href: string) {
  const params = new URL(href, 'https://local.invalid').searchParams
  referenceSelection.value = params.get('referenz') || ''
  articleIndexSelection.value = params.get('artikel') === 'az'
  sectionSelection.value = params.get('rubrik') || ''
}
