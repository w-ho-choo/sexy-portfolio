import { NextResponse } from 'next/server'
import { projectData } from '../project'

export function GET() {
  return NextResponse.json(projectData)
}
