import { NextRequest, NextResponse } from 'next/server'
import { projectData } from '@/app/api/project'

export async function GET(
  req: NextRequest,
  context: { params: { id: string } },
) {
  const { id } = await context.params

  if (id) {
    const project = projectData.find((proj) => proj.id === Number(id))
    if (project) {
      return NextResponse.json(project)
    } else {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }
  } else {
    return NextResponse.json({ error: 'ID not provided' }, { status: 400 })
  }
}
