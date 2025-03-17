import { NextRequest, NextResponse } from 'next/server'
import { projectData } from '../../project'

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params

  if (!id) {
    return NextResponse.json({ error: 'ID not provided' }, { status: 400 })
  }

  const projectId = Number(id)
  const project = projectData.find((proj) => proj.id === projectId)

  if (project) {
    return NextResponse.json(project)
  } else {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 })
  }
}
