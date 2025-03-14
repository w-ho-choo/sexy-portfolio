import { WorkData } from '@/app/api/project'

export default async function ProjectPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = await params
  const response = await fetch(`http://localhost:3000/api/project/${id}`)
  const data: WorkData = await response.json()

  const {
    id: projectId,
    category,
    description,
    images,
    isOnCompany,
    isServiceNow,
    leadTime,
    stack,
    title,
    url,
    mainTech,
    thumbnails,
  } = data

  return <div>hi{id}</div>
}
