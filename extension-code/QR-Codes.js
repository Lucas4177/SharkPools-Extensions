// Name: QR Codes
// ID: SPqrCodes
// Description: Create and Read QR Codes
// By: SharkPool

//  Version 1.0.11

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("QR Code Extension must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNDEuNTI2ODMiIGhlaWdodD0iMTQxLjUyNjgzIiB2aWV3Qm94PSIwLDAsMTQxLjUyNjgzLDE0MS41MjY4MyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNDAiIHkxPSIxMTIuMjM2NTkiIHgyPSIyNDAiIHkyPSIyNDcuNzYzNDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMmRjNGFkIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMmVjYzcxIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjI0MCIgeTE9IjExMi4yMzY1OSIgeDI9IjI0MCIgeTI9IjI0Ny43NjM0MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxYTZmM2QiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxOTZiNWUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY5LjIzNjU5LC0xMDkuMjM2NTkpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xNzIuMjM2NTksMTgwYzAsLTM3LjQyNDcgMzAuMzM4NzEsLTY3Ljc2MzQxIDY3Ljc2MzQxLC02Ny43NjM0MWMzNy40MjQ3LDAgNjcuNzYzNDEsMzAuMzM4NzEgNjcuNzYzNDEsNjcuNzYzNDFjMCwzNy40MjQ3IC0zMC4zMzg3MSw2Ny43NjM0MSAtNjcuNzYzNDEsNjcuNzYzNDFjLTM3LjQyNDcsMCAtNjcuNzYzNDEsLTMwLjMzODcxIC02Ny43NjM0MSwtNjcuNzYzNDF6IiBmaWxsPSJ1cmwoI2NvbG9yLTEpIiBzdHJva2U9InVybCgjY29sb3ItMikiIHN0cm9rZS13aWR0aD0iNiIvPjxwYXRoIGQ9Ik0yMDIuMjg0ODEsMjE2LjcxNTE5di03NC40MzAzOGg3NC40MzAzOHY3NC40MzAzOHoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTIwMi4yODQ4MSwxNDIuMjg0ODFoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMDUuODI5MTEsMTQyLjI4NDgxaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjA5LjM3MzQyLDE0Mi4yODQ4MWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIxMi45MTc3MiwxNDIuMjg0ODFoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMTYuNDYyMDMsMTQyLjI4NDgxaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjIwLjAwNjMzLDE0Mi4yODQ4MWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIyMy41NTA2MywxNDIuMjg0ODFoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMzcuNzI3ODUsMTQyLjI4NDgxaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjUxLjkwNTA2LDE0Mi4yODQ4MWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI1NS40NDkzNywxNDIuMjg0ODFoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNTguOTkzNjcsMTQyLjI4NDgxaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjYyLjUzNzk3LDE0Mi4yODQ4MWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI2Ni4wODIyOCwxNDIuMjg0ODFoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNjkuNjI2NTgsMTQyLjI4NDgxaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjczLjE3MDg5LDE0Mi4yODQ4MWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIwMi4yODQ4MSwxNDUuODI5MTFoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMjMuNTUwNjMsMTQ1LjgyOTExaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjMwLjYzOTI0LDE0NS44MjkxMWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIzNy43Mjc4NSwxNDUuODI5MTFoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNDEuMjcyMTUsMTQ1LjgyOTExaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjQ0LjgxNjQ2LDE0NS44MjkxMWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI1MS45MDUwNiwxNDUuODI5MTFoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNzMuMTcwODksMTQ1LjgyOTExaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjAyLjI4NDgxLDE0OS4zNzM0MmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIwOS4zNzM0MiwxNDkuMzczNDJoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMTIuOTE3NzIsMTQ5LjM3MzQyaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjE2LjQ2MjAzLDE0OS4zNzM0MmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIyMy41NTA2MywxNDkuMzczNDJoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNDEuMjcyMTUsMTQ5LjM3MzQyaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjUxLjkwNTA2LDE0OS4zNzM0MmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI1OC45OTM2NywxNDkuMzczNDJoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNjIuNTM3OTcsMTQ5LjM3MzQyaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjY2LjA4MjI4LDE0OS4zNzM0MmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI3My4xNzA4OSwxNDkuMzczNDJoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMDIuMjg0ODEsMTUyLjkxNzcyaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjA5LjM3MzQyLDE1Mi45MTc3MmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIxMi45MTc3MiwxNTIuOTE3NzJoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMTYuNDYyMDMsMTUyLjkxNzcyaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjIzLjU1MDYzLDE1Mi45MTc3MmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIzMC42MzkyNCwxNTIuOTE3NzJoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMzQuMTgzNTQsMTUyLjkxNzcyaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjM3LjcyNzg1LDE1Mi45MTc3MmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI0MS4yNzIxNSwxNTIuOTE3NzJoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNTEuOTA1MDYsMTUyLjkxNzcyaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjU4Ljk5MzY3LDE1Mi45MTc3MmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI2Mi41Mzc5NywxNTIuOTE3NzJoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNjYuMDgyMjgsMTUyLjkxNzcyaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjczLjE3MDg5LDE1Mi45MTc3MmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIwMi4yODQ4MSwxNTYuNDYyMDNoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMDkuMzczNDIsMTU2LjQ2MjAzaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjEyLjkxNzcyLDE1Ni40NjIwM2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIxNi40NjIwMywxNTYuNDYyMDNoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMjMuNTUwNjMsMTU2LjQ2MjAzaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjM3LjcyNzg1LDE1Ni40NjIwM2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI1MS45MDUwNiwxNTYuNDYyMDNoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNTguOTkzNjcsMTU2LjQ2MjAzaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjYyLjUzNzk3LDE1Ni40NjIwM2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI2Ni4wODIyOCwxNTYuNDYyMDNoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNzMuMTcwODksMTU2LjQ2MjAzaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjAyLjI4NDgxLDE2MC4wMDYzM2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIyMy41NTA2MywxNjAuMDA2MzNoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMzAuNjM5MjQsMTYwLjAwNjMzaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjM0LjE4MzU0LDE2MC4wMDYzM2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI0MS4yNzIxNSwxNjAuMDA2MzNoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNDQuODE2NDYsMTYwLjAwNjMzaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjUxLjkwNTA2LDE2MC4wMDYzM2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI3My4xNzA4OSwxNjAuMDA2MzNoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMDIuMjg0ODEsMTYzLjU1MDYzaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjA1LjgyOTExLDE2My41NTA2M2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIwOS4zNzM0MiwxNjMuNTUwNjNoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMTIuOTE3NzIsMTYzLjU1MDYzaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjE2LjQ2MjAzLDE2My41NTA2M2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIyMC4wMDYzMywxNjMuNTUwNjNoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMjMuNTUwNjMsMTYzLjU1MDYzaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjMwLjYzOTI0LDE2My41NTA2M2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIzNy43Mjc4NSwxNjMuNTUwNjNoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNDQuODE2NDYsMTYzLjU1MDYzaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjUxLjkwNTA2LDE2My41NTA2M2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI1NS40NDkzNywxNjMuNTUwNjNoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNTguOTkzNjcsMTYzLjU1MDYzaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjYyLjUzNzk3LDE2My41NTA2M2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI2Ni4wODIyOCwxNjMuNTUwNjNoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNjkuNjI2NTgsMTYzLjU1MDYzaDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjczLjE3MDg5LDE2My41NTA2M2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIzNC4xODM1NCwxNjcuMDk0OTRoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNDEuMjcyMTUsMTY3LjA5NDk0aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjAyLjI4NDgxLDE3MC42MzkyNGgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIwNS44MjkxMSwxNzAuNjM5MjRoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMDkuMzczNDIsMTcwLjYzOTI0aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjEyLjkxNzcyLDE3MC42MzkyNGgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIxNi40NjIwMywxNzAuNjM5MjRoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMjMuNTUwNjMsMTcwLjYzOTI0aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjI3LjA5NDk0LDE3MC42MzkyNGgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIzMC42MzkyNCwxNzAuNjM5MjRoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMzQuMTgzNTQsMTcwLjYzOTI0aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjQ0LjgxNjQ2LDE3MC42MzkyNGgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI0OC4zNjA3NiwxNzAuNjM5MjRoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNTUuNDQ5MzcsMTcwLjYzOTI0aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjYyLjUzNzk3LDE3MC42MzkyNGgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI2OS42MjY1OCwxNzAuNjM5MjRoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMDIuMjg0ODEsMTc0LjE4MzU0aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjA1LjgyOTExLDE3NC4xODM1NGgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIxMi45MTc3MiwxNzQuMTgzNTRoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMTYuNDYyMDMsMTc0LjE4MzU0aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjIwLjAwNjMzLDE3NC4xODM1NGgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIyNy4wOTQ5NCwxNzQuMTgzNTRoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMzcuNzI3ODUsMTc0LjE4MzU0aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjQ0LjgxNjQ2LDE3NC4xODM1NGgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI0OC4zNjA3NiwxNzQuMTgzNTRoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNTEuOTA1MDYsMTc0LjE4MzU0aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjU1LjQ0OTM3LDE3NC4xODM1NGgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI1OC45OTM2NywxNzQuMTgzNTRoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNzMuMTcwODksMTc0LjE4MzU0aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjAyLjI4NDgxLDE3Ny43Mjc4NWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIxNi40NjIwMywxNzcuNzI3ODVoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMjAuMDA2MzMsMTc3LjcyNzg1aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjIzLjU1MDYzLDE3Ny43Mjc4NWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIzNC4xODM1NCwxNzcuNzI3ODVoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMzcuNzI3ODUsMTc3LjcyNzg1aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjQxLjI3MjE1LDE3Ny43Mjc4NWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI0NC44MTY0NiwxNzcuNzI3ODVoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNDguMzYwNzYsMTc3LjcyNzg1aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjUxLjkwNTA2LDE3Ny43Mjc4NWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI2Ni4wODIyOCwxNzcuNzI3ODVoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNjkuNjI2NTgsMTc3LjcyNzg1aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjA5LjM3MzQyLDE4MS4yNzIxNWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIxNi40NjIwMywxODEuMjcyMTVoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMjAuMDA2MzMsMTgxLjI3MjE1aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjI3LjA5NDk0LDE4MS4yNzIxNWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIzMC42MzkyNCwxODEuMjcyMTVoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMzQuMTgzNTQsMTgxLjI3MjE1aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjQ0LjgxNjQ2LDE4MS4yNzIxNWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI0OC4zNjA3NiwxODEuMjcyMTVoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNTguOTkzNjcsMTgxLjI3MjE1aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjYyLjUzNzk3LDE4MS4yNzIxNWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI2Ni4wODIyOCwxODEuMjcyMTVoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNjkuNjI2NTgsMTgxLjI3MjE1aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjczLjE3MDg5LDE4MS4yNzIxNWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIwNS44MjkxMSwxODQuODE2NDZoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMDkuMzczNDIsMTg0LjgxNjQ2aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjEyLjkxNzcyLDE4NC44MTY0NmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIxNi40NjIwMywxODQuODE2NDZoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMjMuNTUwNjMsMTg0LjgxNjQ2aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjM0LjE4MzU0LDE4NC44MTY0NmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIzNy43Mjc4NSwxODQuODE2NDZoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNDQuODE2NDYsMTg0LjgxNjQ2aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjUxLjkwNTA2LDE4NC44MTY0NmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI1OC45OTM2NywxODQuODE2NDZoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMzAuNjM5MjQsMTg4LjM2MDc2aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjM3LjcyNzg1LDE4OC4zNjA3NmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI0OC4zNjA3NiwxODguMzYwNzZoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNTEuOTA1MDYsMTg4LjM2MDc2aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjU1LjQ0OTM3LDE4OC4zNjA3NmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI1OC45OTM2NywxODguMzYwNzZoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNjYuMDgyMjgsMTg4LjM2MDc2aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjY5LjYyNjU4LDE4OC4zNjA3NmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIwMi4yODQ4MSwxOTEuOTA1MDZoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMDUuODI5MTEsMTkxLjkwNTA2aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjA5LjM3MzQyLDE5MS45MDUwNmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIxMi45MTc3MiwxOTEuOTA1MDZoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMTYuNDYyMDMsMTkxLjkwNTA2aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjIwLjAwNjMzLDE5MS45MDUwNmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIyMy41NTA2MywxOTEuOTA1MDZoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMzAuNjM5MjQsMTkxLjkwNTA2aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjM3LjcyNzg1LDE5MS45MDUwNmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI0NC44MTY0NiwxOTEuOTA1MDZoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNjIuNTM3OTcsMTkxLjkwNTA2aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjY2LjA4MjI4LDE5MS45MDUwNmgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI2OS42MjY1OCwxOTEuOTA1MDZoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMDIuMjg0ODEsMTk1LjQ0OTM3aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjIzLjU1MDYzLDE5NS40NDkzN2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI0MS4yNzIxNSwxOTUuNDQ5MzdoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNTUuNDQ5MzcsMTk1LjQ0OTM3aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjYyLjUzNzk3LDE5NS40NDkzN2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI2Ni4wODIyOCwxOTUuNDQ5MzdoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNjkuNjI2NTgsMTk1LjQ0OTM3aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjAyLjI4NDgxLDE5OC45OTM2N2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIwOS4zNzM0MiwxOTguOTkzNjdoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMTIuOTE3NzIsMTk4Ljk5MzY3aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjE2LjQ2MjAzLDE5OC45OTM2N2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIyMy41NTA2MywxOTguOTkzNjdoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMzAuNjM5MjQsMTk4Ljk5MzY3aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjM3LjcyNzg1LDE5OC45OTM2N2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI0NC44MTY0NiwxOTguOTkzNjdoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNTEuOTA1MDYsMTk4Ljk5MzY3aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjU1LjQ0OTM3LDE5OC45OTM2N2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI2Mi41Mzc5NywxOTguOTkzNjdoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMDIuMjg0ODEsMjAyLjUzNzk3aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjA5LjM3MzQyLDIwMi41Mzc5N2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIxMi45MTc3MiwyMDIuNTM3OTdoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMTYuNDYyMDMsMjAyLjUzNzk3aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjIzLjU1MDYzLDIwMi41Mzc5N2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIzMC42MzkyNCwyMDIuNTM3OTdoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMzcuNzI3ODUsMjAyLjUzNzk3aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjQxLjI3MjE1LDIwMi41Mzc5N2gzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI2Ni4wODIyOCwyMDIuNTM3OTdoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNjkuNjI2NTgsMjAyLjUzNzk3aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjAyLjI4NDgxLDIwNi4wODIyOGgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIwOS4zNzM0MiwyMDYuMDgyMjhoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMTIuOTE3NzIsMjA2LjA4MjI4aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjE2LjQ2MjAzLDIwNi4wODIyOGgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIyMy41NTA2MywyMDYuMDgyMjhoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMzAuNjM5MjQsMjA2LjA4MjI4aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjQxLjI3MjE1LDIwNi4wODIyOGgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI0NC44MTY0NiwyMDYuMDgyMjhoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMDIuMjg0ODEsMjA5LjYyNjU4aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjIzLjU1MDYzLDIwOS42MjY1OGgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIzMC42MzkyNCwyMDkuNjI2NThoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMzQuMTgzNTQsMjA5LjYyNjU4aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjQxLjI3MjE1LDIwOS42MjY1OGgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI0NC44MTY0NiwyMDkuNjI2NThoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNDguMzYwNzYsMjA5LjYyNjU4aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjU4Ljk5MzY3LDIwOS42MjY1OGgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI2Mi41Mzc5NywyMDkuNjI2NThoMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNjYuMDgyMjgsMjA5LjYyNjU4aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjAyLjI4NDgxLDIxMy4xNzA4OWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIwNS44MjkxMSwyMTMuMTcwODloMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMDkuMzczNDIsMjEzLjE3MDg5aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjEyLjkxNzcyLDIxMy4xNzA4OWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIxNi40NjIwMywyMTMuMTcwODloMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMjAuMDA2MzMsMjEzLjE3MDg5aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjIzLjU1MDYzLDIxMy4xNzA4OWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTIzMC42MzkyNCwyMTMuMTcwODloMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yMzcuNzI3ODUsMjEzLjE3MDg5aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjUxLjkwNTA2LDIxMy4xNzA4OWgzLjU0NDN2My41NDQzaC0zLjU0NDN6TTI1NS40NDkzNywyMTMuMTcwODloMy41NDQzdjMuNTQ0M2gtMy41NDQzek0yNTguOTkzNjcsMjEzLjE3MDg5aDMuNTQ0M3YzLjU0NDNoLTMuNTQ0M3pNMjY5LjYyNjU4LDIxMy4xNzA4OWgzLjU0NDN2My41NDQzaC0zLjU0NDN6IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L2c+PC9zdmc+";
  const blockIconURI =
"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iODQiIGhlaWdodD0iODQiPgoJPCEtLSBDcmVhdGVkIHdpdGggaHR0cHM6Ly9hcGkucXJzZXJ2ZXIuY29tIChRUiBDb2RlIEFQSSwgc2VlIGdvUVIubWUvYXBpIGZvciBpbmZvcm1hdGlvbikgLS0+Cgk8dGl0bGU+UVIgQ29kZTwvdGl0bGU+Cgk8ZGVzYz5TaGFya1Bvb2wgaXMgQ29vbDwvZGVzYz4KCTxyZWN0IHN0eWxlPSJmaWxsOnJnYigyNTUsIDI1NSwgMjU1KTtmaWxsLW9wYWNpdHk6MSIgeD0iMCIgeT0iMCIgd2lkdGg9Ijg0IiBoZWlnaHQ9Ijg0IiAvPgoJPGcgaWQ9ImVsZW1lbnRzIj4KCQk8cGF0aCBzdHlsZT0iZmlsbDpyZ2IoMCwgMCwgMCkiIGQ9Ik0gMCwwIGwgNCwwIDAsNCAtNCwwIHogTSA0LDAgbCA0LDAgMCw0IC00LDAgeiBNIDgsMCBsIDQsMCAwLDQgLTQsMCB6IE0gMTIsMCBsIDQsMCAwLDQgLTQsMCB6IE0gMTYsMCBsIDQsMCAwLDQgLTQsMCB6IE0gMjAsMCBsIDQsMCAwLDQgLTQsMCB6IE0gMjQsMCBsIDQsMCAwLDQgLTQsMCB6IE0gNDAsMCBsIDQsMCAwLDQgLTQsMCB6IE0gNTYsMCBsIDQsMCAwLDQgLTQsMCB6IE0gNjAsMCBsIDQsMCAwLDQgLTQsMCB6IE0gNjQsMCBsIDQsMCAwLDQgLTQsMCB6IE0gNjgsMCBsIDQsMCAwLDQgLTQsMCB6IE0gNzIsMCBsIDQsMCAwLDQgLTQsMCB6IE0gNzYsMCBsIDQsMCAwLDQgLTQsMCB6IE0gODAsMCBsIDQsMCAwLDQgLTQsMCB6IE0gMCw0IGwgNCwwIDAsNCAtNCwwIHogTSAyNCw0IGwgNCwwIDAsNCAtNCwwIHogTSAzMiw0IGwgNCwwIDAsNCAtNCwwIHogTSA0MCw0IGwgNCwwIDAsNCAtNCwwIHogTSA0NCw0IGwgNCwwIDAsNCAtNCwwIHogTSA0OCw0IGwgNCwwIDAsNCAtNCwwIHogTSA1Niw0IGwgNCwwIDAsNCAtNCwwIHogTSA4MCw0IGwgNCwwIDAsNCAtNCwwIHogTSAwLDggbCA0LDAgMCw0IC00LDAgeiBNIDgsOCBsIDQsMCAwLDQgLTQsMCB6IE0gMTIsOCBsIDQsMCAwLDQgLTQsMCB6IE0gMTYsOCBsIDQsMCAwLDQgLTQsMCB6IE0gMjQsOCBsIDQsMCAwLDQgLTQsMCB6IE0gNDQsOCBsIDQsMCAwLDQgLTQsMCB6IE0gNTYsOCBsIDQsMCAwLDQgLTQsMCB6IE0gNjQsOCBsIDQsMCAwLDQgLTQsMCB6IE0gNjgsOCBsIDQsMCAwLDQgLTQsMCB6IE0gNzIsOCBsIDQsMCAwLDQgLTQsMCB6IE0gODAsOCBsIDQsMCAwLDQgLTQsMCB6IE0gMCwxMiBsIDQsMCAwLDQgLTQsMCB6IE0gOCwxMiBsIDQsMCAwLDQgLTQsMCB6IE0gMTIsMTIgbCA0LDAgMCw0IC00LDAgeiBNIDE2LDEyIGwgNCwwIDAsNCAtNCwwIHogTSAyNCwxMiBsIDQsMCAwLDQgLTQsMCB6IE0gMzIsMTIgbCA0LDAgMCw0IC00LDAgeiBNIDM2LDEyIGwgNCwwIDAsNCAtNCwwIHogTSA0MCwxMiBsIDQsMCAwLDQgLTQsMCB6IE0gNDQsMTIgbCA0LDAgMCw0IC00LDAgeiBNIDU2LDEyIGwgNCwwIDAsNCAtNCwwIHogTSA2NCwxMiBsIDQsMCAwLDQgLTQsMCB6IE0gNjgsMTIgbCA0LDAgMCw0IC00LDAgeiBNIDcyLDEyIGwgNCwwIDAsNCAtNCwwIHogTSA4MCwxMiBsIDQsMCAwLDQgLTQsMCB6IE0gMCwxNiBsIDQsMCAwLDQgLTQsMCB6IE0gOCwxNiBsIDQsMCAwLDQgLTQsMCB6IE0gMTIsMTYgbCA0LDAgMCw0IC00LDAgeiBNIDE2LDE2IGwgNCwwIDAsNCAtNCwwIHogTSAyNCwxNiBsIDQsMCAwLDQgLTQsMCB6IE0gNDAsMTYgbCA0LDAgMCw0IC00LDAgeiBNIDU2LDE2IGwgNCwwIDAsNCAtNCwwIHogTSA2NCwxNiBsIDQsMCAwLDQgLTQsMCB6IE0gNjgsMTYgbCA0LDAgMCw0IC00LDAgeiBNIDcyLDE2IGwgNCwwIDAsNCAtNCwwIHogTSA4MCwxNiBsIDQsMCAwLDQgLTQsMCB6IE0gMCwyMCBsIDQsMCAwLDQgLTQsMCB6IE0gMjQsMjAgbCA0LDAgMCw0IC00LDAgeiBNIDMyLDIwIGwgNCwwIDAsNCAtNCwwIHogTSAzNiwyMCBsIDQsMCAwLDQgLTQsMCB6IE0gNDQsMjAgbCA0LDAgMCw0IC00LDAgeiBNIDQ4LDIwIGwgNCwwIDAsNCAtNCwwIHogTSA1NiwyMCBsIDQsMCAwLDQgLTQsMCB6IE0gODAsMjAgbCA0LDAgMCw0IC00LDAgeiBNIDAsMjQgbCA0LDAgMCw0IC00LDAgeiBNIDQsMjQgbCA0LDAgMCw0IC00LDAgeiBNIDgsMjQgbCA0LDAgMCw0IC00LDAgeiBNIDEyLDI0IGwgNCwwIDAsNCAtNCwwIHogTSAxNiwyNCBsIDQsMCAwLDQgLTQsMCB6IE0gMjAsMjQgbCA0LDAgMCw0IC00LDAgeiBNIDI0LDI0IGwgNCwwIDAsNCAtNCwwIHogTSAzMiwyNCBsIDQsMCAwLDQgLTQsMCB6IE0gNDAsMjQgbCA0LDAgMCw0IC00LDAgeiBNIDQ4LDI0IGwgNCwwIDAsNCAtNCwwIHogTSA1NiwyNCBsIDQsMCAwLDQgLTQsMCB6IE0gNjAsMjQgbCA0LDAgMCw0IC00LDAgeiBNIDY0LDI0IGwgNCwwIDAsNCAtNCwwIHogTSA2OCwyNCBsIDQsMCAwLDQgLTQsMCB6IE0gNzIsMjQgbCA0LDAgMCw0IC00LDAgeiBNIDc2LDI0IGwgNCwwIDAsNCAtNCwwIHogTSA4MCwyNCBsIDQsMCAwLDQgLTQsMCB6IE0gMzYsMjggbCA0LDAgMCw0IC00LDAgeiBNIDQ0LDI4IGwgNCwwIDAsNCAtNCwwIHogTSAwLDMyIGwgNCwwIDAsNCAtNCwwIHogTSA0LDMyIGwgNCwwIDAsNCAtNCwwIHogTSA4LDMyIGwgNCwwIDAsNCAtNCwwIHogTSAxMiwzMiBsIDQsMCAwLDQgLTQsMCB6IE0gMTYsMzIgbCA0LDAgMCw0IC00LDAgeiBNIDI0LDMyIGwgNCwwIDAsNCAtNCwwIHogTSAyOCwzMiBsIDQsMCAwLDQgLTQsMCB6IE0gMzIsMzIgbCA0LDAgMCw0IC00LDAgeiBNIDM2LDMyIGwgNCwwIDAsNCAtNCwwIHogTSA0OCwzMiBsIDQsMCAwLDQgLTQsMCB6IE0gNTIsMzIgbCA0LDAgMCw0IC00LDAgeiBNIDYwLDMyIGwgNCwwIDAsNCAtNCwwIHogTSA2OCwzMiBsIDQsMCAwLDQgLTQsMCB6IE0gNzYsMzIgbCA0LDAgMCw0IC00LDAgeiBNIDAsMzYgbCA0LDAgMCw0IC00LDAgeiBNIDQsMzYgbCA0LDAgMCw0IC00LDAgeiBNIDEyLDM2IGwgNCwwIDAsNCAtNCwwIHogTSAxNiwzNiBsIDQsMCAwLDQgLTQsMCB6IE0gMjAsMzYgbCA0LDAgMCw0IC00LDAgeiBNIDI4LDM2IGwgNCwwIDAsNCAtNCwwIHogTSA0MCwzNiBsIDQsMCAwLDQgLTQsMCB6IE0gNDgsMzYgbCA0LDAgMCw0IC00LDAgeiBNIDUyLDM2IGwgNCwwIDAsNCAtNCwwIHogTSA1NiwzNiBsIDQsMCAwLDQgLTQsMCB6IE0gNjAsMzYgbCA0LDAgMCw0IC00LDAgeiBNIDY0LDM2IGwgNCwwIDAsNCAtNCwwIHogTSA4MCwzNiBsIDQsMCAwLDQgLTQsMCB6IE0gMCw0MCBsIDQsMCAwLDQgLTQsMCB6IE0gMTYsNDAgbCA0LDAgMCw0IC00LDAgeiBNIDIwLDQwIGwgNCwwIDAsNCAtNCwwIHogTSAyNCw0MCBsIDQsMCAwLDQgLTQsMCB6IE0gMzYsNDAgbCA0LDAgMCw0IC00LDAgeiBNIDQwLDQwIGwgNCwwIDAsNCAtNCwwIHogTSA0NCw0MCBsIDQsMCAwLDQgLTQsMCB6IE0gNDgsNDAgbCA0LDAgMCw0IC00LDAgeiBNIDUyLDQwIGwgNCwwIDAsNCAtNCwwIHogTSA1Niw0MCBsIDQsMCAwLDQgLTQsMCB6IE0gNzIsNDAgbCA0LDAgMCw0IC00LDAgeiBNIDc2LDQwIGwgNCwwIDAsNCAtNCwwIHogTSA4LDQ0IGwgNCwwIDAsNCAtNCwwIHogTSAxNiw0NCBsIDQsMCAwLDQgLTQsMCB6IE0gMjAsNDQgbCA0LDAgMCw0IC00LDAgeiBNIDI4LDQ0IGwgNCwwIDAsNCAtNCwwIHogTSAzMiw0NCBsIDQsMCAwLDQgLTQsMCB6IE0gMzYsNDQgbCA0LDAgMCw0IC00LDAgeiBNIDQ4LDQ0IGwgNCwwIDAsNCAtNCwwIHogTSA1Miw0NCBsIDQsMCAwLDQgLTQsMCB6IE0gNjQsNDQgbCA0LDAgMCw0IC00LDAgeiBNIDY4LDQ0IGwgNCwwIDAsNCAtNCwwIHogTSA3Miw0NCBsIDQsMCAwLDQgLTQsMCB6IE0gNzYsNDQgbCA0LDAgMCw0IC00LDAgeiBNIDgwLDQ0IGwgNCwwIDAsNCAtNCwwIHogTSA0LDQ4IGwgNCwwIDAsNCAtNCwwIHogTSA4LDQ4IGwgNCwwIDAsNCAtNCwwIHogTSAxMiw0OCBsIDQsMCAwLDQgLTQsMCB6IE0gMTYsNDggbCA0LDAgMCw0IC00LDAgeiBNIDI0LDQ4IGwgNCwwIDAsNCAtNCwwIHogTSAzNiw0OCBsIDQsMCAwLDQgLTQsMCB6IE0gNDAsNDggbCA0LDAgMCw0IC00LDAgeiBNIDQ4LDQ4IGwgNCwwIDAsNCAtNCwwIHogTSA1Niw0OCBsIDQsMCAwLDQgLTQsMCB6IE0gNjQsNDggbCA0LDAgMCw0IC00LDAgeiBNIDMyLDUyIGwgNCwwIDAsNCAtNCwwIHogTSA0MCw1MiBsIDQsMCAwLDQgLTQsMCB6IE0gNTIsNTIgbCA0LDAgMCw0IC00LDAgeiBNIDU2LDUyIGwgNCwwIDAsNCAtNCwwIHogTSA2MCw1MiBsIDQsMCAwLDQgLTQsMCB6IE0gNjQsNTIgbCA0LDAgMCw0IC00LDAgeiBNIDcyLDUyIGwgNCwwIDAsNCAtNCwwIHogTSA3Niw1MiBsIDQsMCAwLDQgLTQsMCB6IE0gMCw1NiBsIDQsMCAwLDQgLTQsMCB6IE0gNCw1NiBsIDQsMCAwLDQgLTQsMCB6IE0gOCw1NiBsIDQsMCAwLDQgLTQsMCB6IE0gMTIsNTYgbCA0LDAgMCw0IC00LDAgeiBNIDE2LDU2IGwgNCwwIDAsNCAtNCwwIHogTSAyMCw1NiBsIDQsMCAwLDQgLTQsMCB6IE0gMjQsNTYgbCA0LDAgMCw0IC00LDAgeiBNIDMyLDU2IGwgNCwwIDAsNCAtNCwwIHogTSA0MCw1NiBsIDQsMCAwLDQgLTQsMCB6IE0gNDgsNTYgbCA0LDAgMCw0IC00LDAgeiBNIDY4LDU2IGwgNCwwIDAsNCAtNCwwIHogTSA3Miw1NiBsIDQsMCAwLDQgLTQsMCB6IE0gNzYsNTYgbCA0LDAgMCw0IC00LDAgeiBNIDAsNjAgbCA0LDAgMCw0IC00LDAgeiBNIDI0LDYwIGwgNCwwIDAsNCAtNCwwIHogTSA0NCw2MCBsIDQsMCAwLDQgLTQsMCB6IE0gNjAsNjAgbCA0LDAgMCw0IC00LDAgeiBNIDY4LDYwIGwgNCwwIDAsNCAtNCwwIHogTSA3Miw2MCBsIDQsMCAwLDQgLTQsMCB6IE0gNzYsNjAgbCA0LDAgMCw0IC00LDAgeiBNIDAsNjQgbCA0LDAgMCw0IC00LDAgeiBNIDgsNjQgbCA0LDAgMCw0IC00LDAgeiBNIDEyLDY0IGwgNCwwIDAsNCAtNCwwIHogTSAxNiw2NCBsIDQsMCAwLDQgLTQsMCB6IE0gMjQsNjQgbCA0LDAgMCw0IC00LDAgeiBNIDMyLDY0IGwgNCwwIDAsNCAtNCwwIHogTSA0MCw2NCBsIDQsMCAwLDQgLTQsMCB6IE0gNDgsNjQgbCA0LDAgMCw0IC00LDAgeiBNIDU2LDY0IGwgNCwwIDAsNCAtNCwwIHogTSA2MCw2NCBsIDQsMCAwLDQgLTQsMCB6IE0gNjgsNjQgbCA0LDAgMCw0IC00LDAgeiBNIDAsNjggbCA0LDAgMCw0IC00LDAgeiBNIDgsNjggbCA0LDAgMCw0IC00LDAgeiBNIDEyLDY4IGwgNCwwIDAsNCAtNCwwIHogTSAxNiw2OCBsIDQsMCAwLDQgLTQsMCB6IE0gMjQsNjggbCA0LDAgMCw0IC00LDAgeiBNIDMyLDY4IGwgNCwwIDAsNCAtNCwwIHogTSA0MCw2OCBsIDQsMCAwLDQgLTQsMCB6IE0gNDQsNjggbCA0LDAgMCw0IC00LDAgeiBNIDcyLDY4IGwgNCwwIDAsNCAtNCwwIHogTSA3Niw2OCBsIDQsMCAwLDQgLTQsMCB6IE0gMCw3MiBsIDQsMCAwLDQgLTQsMCB6IE0gOCw3MiBsIDQsMCAwLDQgLTQsMCB6IE0gMTIsNzIgbCA0LDAgMCw0IC00LDAgeiBNIDE2LDcyIGwgNCwwIDAsNCAtNCwwIHogTSAyNCw3MiBsIDQsMCAwLDQgLTQsMCB6IE0gMzIsNzIgbCA0LDAgMCw0IC00LDAgeiBNIDQ0LDcyIGwgNCwwIDAsNCAtNCwwIHogTSA0OCw3MiBsIDQsMCAwLDQgLTQsMCB6IE0gMCw3NiBsIDQsMCAwLDQgLTQsMCB6IE0gMjQsNzYgbCA0LDAgMCw0IC00LDAgeiBNIDMyLDc2IGwgNCwwIDAsNCAtNCwwIHogTSAzNiw3NiBsIDQsMCAwLDQgLTQsMCB6IE0gNDQsNzYgbCA0LDAgMCw0IC00LDAgeiBNIDQ4LDc2IGwgNCwwIDAsNCAtNCwwIHogTSA1Miw3NiBsIDQsMCAwLDQgLTQsMCB6IE0gNjQsNzYgbCA0LDAgMCw0IC00LDAgeiBNIDY4LDc2IGwgNCwwIDAsNCAtNCwwIHogTSA3Miw3NiBsIDQsMCAwLDQgLTQsMCB6IE0gMCw4MCBsIDQsMCAwLDQgLTQsMCB6IE0gNCw4MCBsIDQsMCAwLDQgLTQsMCB6IE0gOCw4MCBsIDQsMCAwLDQgLTQsMCB6IE0gMTIsODAgbCA0LDAgMCw0IC00LDAgeiBNIDE2LDgwIGwgNCwwIDAsNCAtNCwwIHogTSAyMCw4MCBsIDQsMCAwLDQgLTQsMCB6IE0gMjQsODAgbCA0LDAgMCw0IC00LDAgeiBNIDMyLDgwIGwgNCwwIDAsNCAtNCwwIHogTSA0MCw4MCBsIDQsMCAwLDQgLTQsMCB6IE0gNTYsODAgbCA0LDAgMCw0IC00LDAgeiBNIDYwLDgwIGwgNCwwIDAsNCAtNCwwIHogTSA2NCw4MCBsIDQsMCAwLDQgLTQsMCB6IE0gNzYsODAgbCA0LDAgMCw0IC00LDAgeiAiIC8+Cgk8L2c+Cjwvc3ZnPgo=";

  let exportType = ["png", "data.uri"];

  class SPqrCodes {
    getInfo() {
      return {
        id: "SPqrCodes",
        name: "QR Codes",
        color1: "#2ecc71",
        menuIconURI,
        blockIconURI,
        blocks: [
          { blockType: Scratch.BlockType.BUTTON, text: "Disclaimer", func: "disclaim" },
          { blockType: Scratch.BlockType.LABEL, text: "QR Creation" },
          {
            opcode: "createQR",
            blockType: Scratch.BlockType.REPORTER,
            text: "create QR with data [DATA] scaled to [SIZE] px",
            arguments: {
              DATA: { type: Scratch.ArgumentType.STRING, defaultValue: "test 123" },
              SIZE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          },
          {
            opcode: "setExport",
            blockType: Scratch.BlockType.COMMAND,
            text: "set QR export type to [TYPE]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "EXPORTS" }
            }
          },
          {
            opcode: "returnAs",
            blockType: Scratch.BlockType.COMMAND,
            text: "return QR code as [TYPE]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "EXPORTS2" }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "QR Reading" },
          {
            opcode: "readURL",
            blockType: Scratch.BlockType.REPORTER,
            text: "read QR code from URL [URL]",
            arguments: {
              URL: { type: Scratch.ArgumentType.STRING, defaultValue: "test-URL" }
            }
          },
        ],
        menus: {
          EXPORTS: ["png", "jpeg", "svg"],
          EXPORTS2: ["link", "data.uri"]
        }
      };
    }

    disclaim() {
      alert("Unfortunately, You cannot Create or Read QR Codes that use over 900 Characters. Sorry!")
    }

    setExport(args) { exportType[0] = args.TYPE }
    returnAs(args) { exportType[1] = args.TYPE }

    async createQR(args) {
      args.DATA = args.DATA ? encodeURIComponent(args.DATA) : "empty-data";
      const sz = Math.max(10, Math.min(Scratch.Cast.toNumber(args.SIZE), 1000));
      const url = `https://api.qrserver.com/v1/create-qr-code/?data=${args.DATA}&size=${sz}x${sz}&format=${exportType[0]}`;
      if (!await Scratch.canFetch("https://api.qrserver.com/v1/create-qr-code/")) return url;
      if (exportType[1] === "link") return url;
      try {
        const response = await fetch(url);
        const binaryData = new Uint8Array(await response.arrayBuffer());
        const data = btoa(String.fromCharCode.apply(null, binaryData));
        return `data:image/${exportType[0] === "svg" ? "svg+xml" : exportType[0]};base64,${data}`;
      } catch (error) {
        console.log(error);
        return url;
      }
    }

    async readURL(args) {
      const defaultURL = "https://api.qrserver.com/v1/create-qr-code/?data=test%20123&size=100x100&format=png";
      args.URL = args.URL && args.URL !== "test-URL" ? encodeURIComponent(args.URL) : defaultURL;
      if (!await Scratch.canFetch("https://api.qrserver.com/v1/read-qr-code/")) return "";
      try {
        const response = await fetch(`https://api.qrserver.com/v1/read-qr-code/?fileurl=${args.URL}`);
        const data = JSON.parse(await response.text());
        return data[0].symbol[0].data;
      } catch (error) {
        console.log(error);
        return "";
      }
    }
  }

  function addLinearGradientToBody() {
    var grad1 = document.createElement("div");
    grad1.innerHTML = `<svg><defs>
      <linearGradient x1="240" y1="0" x2="240" y2="100" gradientUnits="userSpaceOnUse" id="SPqrCodes-GRAD1">
      <stop offset="0" stop-color="#2dc4ad"/><stop offset="0.5" stop-color="#2ecc71"/></linearGradient>
      </defs></svg>`;
    var grad2 = document.createElement("div");
    grad2.innerHTML = `<svg><defs>
      <linearGradient x1="240" y1="0" x2="240" y2="100" gradientUnits="userSpaceOnUse" id="SPqrCodes-GRAD2">
      <stop offset="0" stop-color="#2ecc71"/><stop offset="0.5" stop-color="#2dc4ad"/></linearGradient>
      </defs></svg>`;
    document.body.append(grad1, grad2);
  }
  if (Scratch.gui) Scratch.gui.getBlockly().then((ScratchBlocks) => {
    addLinearGradientToBody();
    if (!ScratchBlocks?.SPgradients?.patched) { // New Gradient Patch by Ashimee <3
      ScratchBlocks.SPgradients = {gradientUrls: {}, patched: false};
      const BSP = ScratchBlocks.BlockSvg.prototype, BSPR = BSP.render;
      BSP.render = function(...args) {
        const res = BSPR.apply(this, args);
        let category;
        if (this?.svgPath_ && (category = this.type.slice(0, this.type.indexOf("_"))) && ScratchBlocks.SPgradients.gradientUrls[category]) {
          const urls = ScratchBlocks.SPgradients.gradientUrls[category];
          if (urls) this.svgPath_.setAttribute("fill", urls[0]);
        }
        return res;
      }
      ScratchBlocks.SPgradients.patched = true;
    }
    ScratchBlocks.SPgradients.gradientUrls["SPqrCodes"] = ["url(#SPqrCodes-GRAD1)", "url(#SPqrCodes-GRAD2)"];
  });

  Scratch.extensions.register(new SPqrCodes);
})(Scratch);
